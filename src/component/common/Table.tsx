interface Props {
  name: string;
  type: string;
  value: string;
  unit: string;
}

export default function Table({ text }: any) {
  return (
    <div className="rounded">
      <table className="text-center">
        <thead className="">
          <tr className="border-b bg-slate-100">
            <th className="py-3 px-5">prop</th>
            <th className="py-3 px-5">type</th>
            <th className="py-3 px-5">value</th>
            <th className="py-3 px-5">unit</th>
          </tr>
        </thead>
        <tbody>
          {text.map((item: Props, index: number) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-5">{item.name}</td>
              <td className="py-3 px-5">{item.type}</td>
              <td className="py-3 px-5">{item.value}</td>
              <td className="py-3 px-5">{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
