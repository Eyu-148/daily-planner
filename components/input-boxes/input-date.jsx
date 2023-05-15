//@ts-check
/**
* @return {React.ReactElement}
*/
import React from "react"

export default function DateInputBox() {
    const d = new Date()

    let year = d.getFullYear().toString()

    let month = (d.getMonth()+1).toString()
    if (month.length<2) {
        month = '0' + month
    }

    let day = (d.getDate()).toString()
    if (day.length<2) {
        day = '0' + day
    }

    let currentDate = `${year}-${month}-${day}`
    console.log(currentDate)

    return (
        <div className="flex flex-auto focus-within:font-bold">
            <label className="px-2 block uppercase text-slate-900 border-4 border-transparent border-l-blue-400">date</label>
            <input type="date" name="date" defaultValue={currentDate} className="ml-10 px-3 border-2 border-gray-300 rounded-md" required />
        </div>
    )
}