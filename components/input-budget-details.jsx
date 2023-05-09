//@ts-check
import React from "react";
import DateInputBox from "./input-date";

export default function InputFieldBudget() {
    return (
        <fieldset className="border-2 border-gray-100 rounded-md p-7">
            <legend>budget#1</legend>
            <DateInputBox />

            <div className="flex flex-auto mt-5 focus-within:font-bold">
                <label className="px-2 block uppercase text-slate-900 border-4 border-transparent border-l-blue-300">price</label>
                <input type="number" name="date" className="ml-9 px-3 border-2 border-gray-300 rounded-md" required />
            </div>

            <div className="flex flex-auto mt-5 focus-within:font-bold">
                <label className="px-2 block uppercase text-slate-900 border-4 border-transparent border-l-blue-300">Notes</label>
                <textarea name="textarea"  className="ml-7 px-3 border-2 border-gray-300 rounded-md" 
                          rows={10} cols={40}
                          placeholder="what's that money for"
                          spellCheck required />
            </div>
        </fieldset>
    )
}