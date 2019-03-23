import React from 'react';
import C from 'classnames';
import Kalendar from 'kalendar';

const HOLIDAY = {
  '元旦': 1,
  '除夕': 2,
  '春节': 2,
  '清明节': 4,
  '劳动节': 5,
  '端午节': 6,
  '中秋节': 9,
  '国庆节': 10,
}

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      selectDay: new Date().getDate(),
      calendar: null,
    }
  }

  componentDidMount() {
    const { date } = this.state;
    this.setState({
      calendar: Kalendar.monthly({ date })
    })
  }

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  render() {
    const { calendar, selectDay } = this.state;
    return (
      <div className="calendar">
        <div className="content">
          <div className="about-data">
            <h2>老黄历</h2>
            <div className="calendar-table">
              <div className="calendar-table-header">
                <select defaultValue={this.year}>
                  {
                    Array.apply(null, { length: 2051 - 1900 }).map((_, idx) => (
                      <option
                        key={`header-y-${idx}`}
                        value={1900 + idx}
                      >{1900 + idx}</option>
                    ))
                  }
                </select>
                <select defaultValue={this.month}>
                  {
                    Array.apply(null, { length: 12 }).map((_, idx) => (
                      <option
                        key={`header-m-${idx}`}
                        value={idx}
                      >{1 + idx}</option>
                    ))
                  }
                </select>
                <select>
                  <option>假日安排</option>
                  {
                    Object.keys(HOLIDAY).map(key => (
                      <option
                        key={key}
                      >{key}</option>
                    ))
                  }
                </select>
              </div>
              <table>
                <thead>
                  <tr>
                    {
                      '一二三四五六日'.split('').map(s => (<th key={s}>{s}</th>))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    calendar && calendar.map((week, i) => (
                      <tr key={i}>
                        {
                          week.map((day, idx) => (
                            <td
                              key={idx}
                              className={C({
                                day,
                                today: day && day.date === selectDay
                              })}
                              onClick={() => this.setState({ selectDay: day.date })}
                            >{day && day.date}</td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="content_bottom">
              <div className="company_address">
                <h2>宜</h2>

              </div>
              <div className="contact_info">
                <h2>忌</h2>

              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;
