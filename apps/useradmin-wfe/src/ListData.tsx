import internal from "stream"

import { useMemo, useState } from "react"

import { ListDataItem } from "./ListDataItem"
import { Group } from "./staticGroups"

export interface ListDataProps {
	groups: Group[]
}

export const ListData = ({ groups }: ListDataProps) => {
	const [internalGroups, setInternalGroups] = useState(groups)
	const [selectedGroup, setSelectedGroup] = useState<Group>()
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

	const sortedGroups = useMemo(() => {
		const groupsToSort = internalGroups.slice(0)
		groupsToSort.sort((a, b) => {
			if (sortDirection === "asc") {
				return a.name.localeCompare(b.name)
			}
			return b.name.localeCompare(a.name)
		})
		return groupsToSort
	}, [internalGroups, sortDirection])

	const selectGroup = (group: Group) => setSelectedGroup(group)

	const deleteGroup = (group: Group) => {
		const newGroupList = internalGroups.filter((aGroup) => group !== aGroup)
		setInternalGroups(newGroupList)
	}

	const toggleSortDirection = () => {
		if (sortDirection === "asc") {
			setSortDirection("desc")
			return
		}
		setSortDirection("asc")
	}

	return (
		<>
			<h1>List of Groups</h1>
			{selectedGroup && (
				<dl>
					<dt>Id</dt>
					<dd>{selectedGroup.id}</dd>
					<dt>Name</dt>
					<dd>{selectedGroup.name}</dd>
					<dt>Role</dt>
					<dd>{selectedGroup.role}</dd>
					<dt>Description</dt>
					<dd>{selectedGroup.description}</dd>
				</dl>
			)}
			<button onClick={toggleSortDirection}>Sort direction: {sortDirection}</button>
			<ol>
				{sortedGroups.map((group) => (
					<li key={group.id}>
						<ListDataItem
							group={group}
							isHighligthed={group === selectedGroup}
							onSelect={selectGroup}
							onDelete={deleteGroup}
						/>
					</li>
				))}
			</ol>
			<button>Reload</button>
		</>
	)
}
