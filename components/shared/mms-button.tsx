import Link from 'next/link'
export default function MmsButton({
       label,
   }: {
        label: string
    }) {
    return (
        <Link className="btn bg-[#e29d2a] hover:bg-[#323337] text-white ml-3" href="/dashboard">{label}</Link>
    )
}
