interface Props {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="button"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <a
            href={
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            }
          >
            <button className="button">Previous</button>
          </a>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="button" disabled={!nextPage}>
            Proximo
          </button>
        )}
        {nextPage && (
          <a href={`/blog/page/${currentPage + 1}`}>
            <button className="button">Proximo</button>
          </a>
        )}
      </nav>
    </div>
  );
}
