import { useState,useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm() {

    const [budget, setBuget] = useState(0)
    const { dispatch } = useBudget()

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setBuget(e.target.valueAsNumber)
    }
    const isValid  = useMemo(()=> {
        return isNaN(budget) || budget <= 0
    },[budget])

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({type: 'add-budget', payload: {budget} })
    }

  return (
    <form  className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-cyan-600 font-mono font-black text-center">
                Definir presupuesto
            </label>
            <input 
                id="budget"
                type="number" 
                className="w-full bg-cyan-50 border font-sans border-gray-200 p-2"
                placeholder='Define tu presupuesto'
                name='budget'
                value={budget}
                onChange={handleChange }
            />
        </div>
        <input 
            value="Difinir Presupesto"
            type="submit" 
            className="bg-cyan-600 hover:bg-cyan-500 cursor-poiter w-full p-2 text-white  font-mono uppercas disabled:opacity-40"
            disabled={isValid}
        />
    </form>
    
  )
}

