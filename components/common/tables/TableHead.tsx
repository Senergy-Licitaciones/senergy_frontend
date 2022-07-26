type Props={
    heads:Array<string>
}
export default function TableHead ({ heads }:Props) {
  return (
        <thead >
        <tr className="text-sm font-semibold dark:divide-gray-500 dark:text-gray-400 divide-x" >
            {
                heads.map((label, i) => (
                    <th key={label + '-' + i} className="p-4 uppercase">{label}</th>
                ))
            }
        </tr>
        </thead>
  )
}
