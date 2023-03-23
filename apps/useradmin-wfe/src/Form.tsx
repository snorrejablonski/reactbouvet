import { useState } from "react"

import { BooleanField } from "./BooleanField"
import { ClickUntil } from "./ClickUntil"
import { ClickUntilForm } from "./ClickUntilForm"
import { NumericField } from "./NumericField"
import { TextField } from "./TextField"

export const Form = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [address, setAddress] = useState("")
	const [isActive, setIsActive] = useState(false)
	const [age, setAge] = useState(0)

	const onSubmit = () => {
		console.log({
			firstName,
			lastName,
			address,
			isActive
		})
	}

	return (
		<>
			<h1>Hello world</h1>
			<TextField label="Fornavn" value={firstName} onChange={setFirstName} />
			<TextField label="Etternavn" value={lastName} onChange={setLastName} />
			<TextField label="Adresse" value={address} onChange={setAddress} />
			<BooleanField label="Active" value={isActive} onChange={setIsActive} />
			<button onClick={onSubmit}>Submit</button>
			<br />
			<NumericField
				label="Alder"
				value={age}
				minValue={0}
				maxValue={55}
				onChange={setAge}
				decimalsAllowed={true}
			/>
			<ClickUntil />
			<ClickUntilForm />
		</>
	)
}
