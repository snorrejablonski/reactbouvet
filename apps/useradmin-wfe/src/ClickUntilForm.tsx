import { useState } from "react"

import { ClickUntil } from "./ClickUntil"
import { NumericField } from "./NumericField"
import { TextField } from "./TextField"

export const ClickUntilForm = () => {
	const [limit, setLimit] = useState(15)
	const [limitMessage, setLimitMessage] = useState("Limit reached")

	return (
		<>
			<NumericField label="Limit" value={limit} onChange={setLimit} minValue={0} maxValue={30} />
			<TextField label="Limit message" value={limitMessage} onChange={setLimitMessage} />
			<ClickUntil limit={limit} limitMessage={limitMessage} />
		</>
	)
}
