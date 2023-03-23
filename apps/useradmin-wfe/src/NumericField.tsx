import { useId } from "react"

export interface NumericFieldsProp {
	label?: string
	value: number
	onChange: (newValue: number) => unknown

	minValue?: number
	maxValue?: number
	decimalsAllowed?: boolean
}

export const NumericField = ({
	label = "Missing label",
	value,
	onChange,
	minValue = 0,
	maxValue = 100,
	decimalsAllowed = false
}: NumericFieldsProp) => {
	const id = useId()
	const useRange = !decimalsAllowed && Math.abs(maxValue - minValue) <= 50

	const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		const valueNum = evt.target.valueAsNumber
		if (isNaN(valueNum)) {
			onChange(0)
			return
		}

		if (valueNum < minValue || valueNum > maxValue) {
			return
		}

		onChange(decimalsAllowed ? valueNum : Math.round(valueNum))
	}

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type={useRange ? "range" : "number"}
				id={id}
				value={value}
				onChange={onInputChange}
				min={minValue}
				max={maxValue}
			/>
			<p>{value}</p>
		</>
	)
}
