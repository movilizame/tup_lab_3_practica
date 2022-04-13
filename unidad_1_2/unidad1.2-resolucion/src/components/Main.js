import BlogPost from "./BlogPost";
import Body from "./Body";

export default function Main ({ pageBody, links }) { // 
    return (
        <main>
            <ul>
                <li><a href={links[0]} className="red">{links[0]}</a></li>
                <li><a href={links[1]}>{links[1]}</a></li>
            </ul>
            <Body body={pageBody + '. Esta es la resolución con BONUS!'} />
            <BlogPost />
        </main>
    )
}