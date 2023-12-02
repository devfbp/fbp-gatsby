import * as React from "react"

const Pagination = (props) => {
    var numberOfPage = props?.numberOfPage;
    var currentpage = props?.currentpage;
    const pages = [];
    for (var i = 1; i <= numberOfPage; i++) {
        var active = 0;
        if (currentpage == i) {
            active = 1;
        }
        pages.push({ "page": i, "active":active});
    }
    function selectpage(e) {
        props.setPage(parseInt(e.target.dataset.pageid))
        e.preventDefault();
    }
    console.log("pages", pages)
    return (
        <>
            <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                    <ul>
                        {pages &&
                            pages.map((p, index) => (
                                <li><a data-pageid={p?.page} href="javascript:void(0)" onClick={selectpage} className={p?.active == 1 ? "active" : ""}>{p?.page}</a></li>
                            )) 
                        }
                        {/* <li><a href="#"><i className="fas fa-angle-double-left" /></a></li>
                                                <li><a href="#">1</a></li>
                                                <li className="active"><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">...</a></li>
                                                <li><a href="#">10</a></li>
                                                <li><a href="#"><i className="fas fa-angle-double-right" /></a></li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pagination
