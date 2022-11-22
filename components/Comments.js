import Date from './date'

export default function Comments({ comments = [] }) {

  
  return (
    <>
      <h2 className="mt-10 mb-4 text-4xl leading-tight lg:text-6xl">
        Avis des clients:
      </h2>
      <ul>
        {comments?.map((comment) => (
          <li key={comment._id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${comment.email}`}>{comment.name}</a> (
              <Date dateString={comment._createdAt} />)
            </h4>
            <p>{comment.comment}</p>
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  )
}