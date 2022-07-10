import { useEffect, useRef, useState } from "react"
import CodeMirror from "codemirror"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/clike/clike"
import "codemirror/theme/dracula.css"
import "./style.css"

type Props = {
	code: string
	// TODO: Set more precise language type
	language: string
}

export default function HighlightedCode({ code, language }: Props) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const wrapper = ref.current!
		CodeMirror(wrapper, {
			value: code,
			theme: "dracula",
			readOnly: true,
			lineWrapping: false,
			scrollbarStyle: "null",
			viewportMargin: Infinity,
		})

		return () => wrapper.children[0].remove()
	}, [])

	return <div ref={ref}></div>
}
