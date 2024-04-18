import Link from 'next/link';

export default function PostCard(props) {
    const { post } = props;
    return (
    
        <Link className="unstyled" href={`/recipe/${post.slug}`}>
            <div className='postCard'>
                <h3>{post.title}</h3>
                <p>{post.bio}</p>
                <div className='statusContainer'>
                    <p>Prep Time: {post.title}</p>
                    <p>Cook Time: {post.bio}</p>
                    <div className='statusContainer'>
                        <h5>Prep Time</h5>
                        <p>Prep Time: {post.prep_time}</p>
                    </div>
                    <div className='statusContainer'>
                        <h5>Cook Time</h5>
                        <p>Cook Time: {post.cook_time}</p>
                    </div>
                </div>
            </div>
        </Link>
 
    );
    }


