import Link from 'next/link'

const Navigation = () => (
    <div>
        <Link href="/">home</Link> |
        <Link href="/about">about</Link> | 
        <Link href="/work">works</Link> |
        <Link href="/books">books</Link> |
        <Link href="/techdocs">technical documentation</Link>
    
    <style jsx>{`
     {
        text-align:right;
        color: black;   
     }

    `}</style>

    </div>
)
export default Navigation

