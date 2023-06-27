//Pagination component need to re-work!

export default function Pagination({totalPages, currentPage}: {totalPages: number, currentPage: number}) {

    const pages: number[] = new Array(totalPages).fill(0)
    

    return (
        <div className="join">
            <button className="join-item btn">«</button>

            {pages.map((page: number, index: number) => {
                if(index < 5) {
                    return (<button key={index} className={`join-item btn ${index === currentPage-1 && "btn-active"}`}>{index + 1}</button>)
                }
                if(index === 5) {
                    return (<button key={index} className="join-item btn">...</button>)
                }
            })}

            <button className="join-item btn">»</button>
        </div>
    )
}

