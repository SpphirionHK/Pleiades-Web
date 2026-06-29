import type { Specification } from "@/data/types";

export function SpecificationTable({ specifications }: { specifications: Specification[] }) {
  return (
    <div className="overflow-x-auto border border-industrial-200 bg-white">
      <table className="min-w-[720px] w-full border-collapse text-left text-sm">
        <caption className="sr-only">Technical specifications</caption>
        <tbody>
          {specifications.map((spec) => (
            <tr key={spec.label} className="border-b border-industrial-200 last:border-b-0">
              <th className="w-1/3 bg-industrial-100 px-5 py-4 font-semibold text-navy-900">
                {spec.label}
              </th>
              <td className="px-5 py-4 leading-6 text-industrial-500">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
