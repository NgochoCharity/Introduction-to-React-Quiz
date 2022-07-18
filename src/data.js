const SRC = "data:image/png;base64,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"

const height = "100px"
const color = "lightblue"
export {SRC , color, height} ;