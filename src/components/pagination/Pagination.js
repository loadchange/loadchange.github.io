import React from 'react';
import C from 'classnames';

import './style.scss'

class Pagination extends React.Component {


  render() {
    const { pageCount, pageSize, total, currentPage, onClick } = this.props;
    let start = 1;
    if (pageCount >= 10 && currentPage >= 5) {
      start = currentPage - 2;
    }
    return pageCount
      ? (
        <div className="pagination">
          <span className="total">共 {total} 条</span>
          <span className="page-size">{pageSize} 条/页</span>
          <ul className="page-number">
            {
              pageCount >= 10 && currentPage >= 5 && React.Children.toArray([
                (<li onClick={() => onClick(1)}>1</li>),
                (<li className="transition">...</li>)
              ])
            }
            {
              Array.apply(null, { length: pageCount >= 10 ? 5 : pageCount }).map((_, idx) => {
                let _start = currentPage + 2 < pageCount || pageCount < 10 ? start : pageCount - 4
                return (
                  <li
                    key={`page-number-${idx}`}
                    className={C({ current: currentPage === (idx + _start) })}
                    onClick={() => onClick(idx + _start)}
                  >{idx + _start}</li>
                )
              })
            }
            {
              pageCount >= 10 && pageCount - 2 > currentPage && React.Children.toArray([
                (
                  <li
                    className={C('transition', {
                      hide: !(pageCount - currentPage - 2 - 1) || (pageCount - 5 - 2 - 1) <= 0
                    })}>...</li>),
                (<li onClick={() => onClick(pageCount)}>{pageCount}</li>)
              ])
            }
          </ul>
        </div>
      )
      : null
  }
}

export default Pagination;
