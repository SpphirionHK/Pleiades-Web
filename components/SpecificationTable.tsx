import type { Specification } from "@/data/types";

type SpecificationTableProps = {
  specifications: Specification[];
  tone?: "neutral" | "blue";
};

export function SpecificationTable({ specifications, tone = "neutral" }: SpecificationTableProps) {
  const borderClass = tone === "blue" ? "border-accent-blue/80" : "border-industrial-200";
  const rowBorderClass = tone === "blue" ? "border-accent-blue/70" : "border-industrial-200";

  return (
    <div className={`overflow-x-auto border ${borderClass} bg-white`}>
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <caption className="sr-only">Technical specifications</caption>
        <tbody>
          {specifications.map((spec) => (
            <tr key={spec.label} className={`border-b ${rowBorderClass} last:border-b-0`}>
              <th className="w-[42%] bg-white px-5 py-4 font-semibold text-navy-900">
                {spec.label}
              </th>
              <td className="bg-industrial-50 px-5 py-4 leading-6 text-industrial-500">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
