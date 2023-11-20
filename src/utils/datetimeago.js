import * as React from "react"
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
function DateTimeAgo(props) {
    const formatter = buildFormatter(frenchStrings)
    return (
        <>
            <TimeAgo date={props.datetime} formatter={formatter} />
        </>
    )
}
export default DateTimeAgo;