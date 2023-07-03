const Increment = ({ ...propsIcon }) => {
	return (
		<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...propsIcon}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
	)
}

const Decrement = ({ ...propsIcon }) => {
	return (
		<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
			{...propsIcon}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
	)
}

export {Increment, Decrement}
