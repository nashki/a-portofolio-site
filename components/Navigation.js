import Link from 'next/link'

const Navigation = () => (
    <nav>
        <Link href="/">home</Link> |
        <Link href="/about">about</Link> | 
        <Link href="/work">works</Link> |
        <Link href="/books">books</Link> |
        <Link href="/techblog">techincal documentation</Link>
    </nav>
)
export default Navigation

