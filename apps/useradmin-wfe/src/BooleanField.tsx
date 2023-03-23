import React, { useId } from "react"

interface BoolFieldProps {
	label: string
	value: boolean
	onChange: (newValue: boolean) => unknown
}

export const BooleanField = ({ label = "Missing label", value, onChange }: BoolFieldProps) => {
	const id = useId()

	const onCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		onChange(evt.target.checked)
	}

	return (
		<div>
			<input type="checkbox" id={id} checked={value} onChange={onCheckboxChange} />
			<label htmlFor={id}>{label}</label>
		</div>
	)
}
