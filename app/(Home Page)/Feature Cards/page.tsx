import { Users } from "lucide-react";
export default function Featurecards(){
    return(
        <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition">

  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-6">
    <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400"/>
  </div>

  <h4 className="text-xl font-semibold mb-3">
    Student Management
  </h4>

  <p className="text-slate-600 dark:text-slate-400">
    Manage student profiles, guardians, and academic history easily.
  </p>

</div>
    )
}