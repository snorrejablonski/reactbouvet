import { useState } from "react"

import { Group } from "./staticGroups"

export interface ListDataProps {
	groups: Group[]
}

export const ListData = ({ groups }: ListDataProps) => {
	const [selectedGroup, setSelectedGroup] = useState<Group>()

	const selectGroup = (group: Group) => () => {
		setSelectedGroup(group)
	}

  groups.sort((a, b)) => a.name.localeCompare(b.name))

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

			<ol>
				{groups.map((group) => (
					<li
						key={group.id}
						onClick={selectGroup(group)}
						style={{ fontWeight: group === selectedGroup ? "bold" : "normal" }}
					>
						{group.name} - {group.id}
					</li>
				))}
			</ol>
			<button>Reload</button>
		</>
	)
}
