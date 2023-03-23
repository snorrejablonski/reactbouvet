import { Group } from "./staticGroups"

export interface ListDataItemProps {
	group: Group
	isHighligthed?: boolean
	onSelect: (group: Group) => unknown
	onDelete: (group: Group) => unknown
}

export const ListDataItem = ({ group, isHighligthed, onSelect, onDelete }: ListDataItemProps) => {
	const onItemClick = () => onSelect(group)

	const onDeleteClick = () => {
		onDelete(group)
	}

	return (
		<div
			onClick={onItemClick}
			style={{
				fontWeight: isHighligthed ? "bold" : undefined
			}}
		>
			{group.name} - {group.id}
			<button onClick={onDeleteClick}>Delete</button>
		</div>
	)
}
