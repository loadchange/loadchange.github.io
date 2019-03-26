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

const DIRECTIONS = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];

const DRINKS = ["拿铁", "香草拿铁", "焦糖拿铁", "美式", "加浓美式", "摩卡", "红茶拿铁", "石榴蔓越莓苏打水", "抹茶瑞纳冰", "NFC鲜榨橙汁", "NFC鲜榨荔枝汁", "NFC鲜榨芒果汁", "猕猴桃复合汁", "焦糖玛奇朵", "黑金气泡美式"];

const ACTIVITIES = [
  { name: "写单元测试", good: "写单元测试将减少出错", bad: "写单元测试会降低你的开发效率" },
  { name: "洗澡", good: "你几天没洗澡了？", bad: "会把设计方面的灵感洗掉" },
  { name: "锻炼一下身体", good: "增肌减脂", bad: "能量没消耗多少，吃得却更多" },
  { name: "抽烟", good: "抽烟有利于提神，增加思维敏捷", bad: "除非你活够了，死得早点没关系" },
  { name: "白天上线", good: "今天白天上线是安全的", bad: "可能导致灾难性后果" },
  { name: "重构", good: "代码质量得到提高", bad: "你很有可能会陷入泥潭" },
  { name: "跳槽", good: "该放手时就放手", bad: "鉴于当前的经济形势，你的下一份工作未必比现在强" },
  { name: "招人", good: "你面前这位有成为牛人的潜质", bad: "这人会写程序吗？" },
  { name: "面试", good: "面试官今天心情很好", bad: "面试官不爽，会拿你出气" },
  { name: "提交辞职申请", good: "公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋", bad: "鉴于当前的经济形势，你的下一份工作未必比现在强" },
  { name: "申请加薪", good: "老板今天心情很好", bad: "公司正在考虑裁员" },
  { name: "晚上加班", good: "晚上是程序员精神最好的时候", bad: "还需要理由吗？" },
  { name: "在妹子面前吹牛", good: "改善你矮穷挫的形象", bad: "会被识破" },
  { name: "LOL", good: "避免缓冲区溢出", bad: "强撸灰飞烟灭" },
  { name: "浏览成人网站", good: "重拾对生活的信心", bad: "你会心神不宁" },
  { name: "写超过1000行的方法", good: "你的代码组织的很好，长一点没关系", bad: "你的代码将混乱不堪，你自己都看不懂" },
  { name: "提交代码", good: "遇到冲突的几率是最低的", bad: "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了" },
  { name: "代码复审", good: "发现重要问题的几率大大增加", bad: "你什么问题都发现不了，白白浪费时间" },
  { name: "开会", good: "写代码之余放松一下打个盹，有益健康", bad: "小心被扣屎盆子背黑锅" },
  { name: "打DOTA", good: "你将有如神助", bad: "你会被虐的很惨" },
  { name: "晚上上线", good: "晚上是程序员精神最好的时候", bad: "你白天已经筋疲力尽了" },
  { name: "修复BUG", good: "你今天对BUG的嗅觉大大提高", bad: "新产生的BUG将比修复的更多" },
  { name: "设计评审", good: "设计评审会议将变成头脑风暴", bad: "人人筋疲力尽，评审就这么过了" },
  { name: "上微博", good: "今天发生的事不能错过", bad: "今天的微博充满负能量" },
  { name: "上AB站", good: "还需要理由吗？", bad: "满屏兄贵亮瞎你的眼" },
  { name: "玩FlappyBird", good: "今天破纪录的几率很高", bad: "除非你想玩到把手机砸了" }
];

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      selected: null,
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

  get random() {
    const { selected } = this.state;
    if (!selected) return null;
    let n = +selected.dateText.replace(/-/g, '') % 11117, i = 0;
    for (; i < 100; i++) {
      n = n * n;
      n = n % 11117;
    }
    return n;
  }

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get pickTodaysLuck() {
    const { selected } = this.state;
    if (!selected) return null;
    const idx = this.random % (ACTIVITIES.length - 6);
    let count = 0;
    return ACTIVITIES.filter((item, i) => {
      const res = i >= idx && count < 6;
      if (res) count++;
      return res;
    }).map((item, idx) => (
      <div key={idx} className="pick-todays-luck">
        <h5>{item.name}</h5>
        <strong>{item[idx < 3 ? 'good' : 'bad']}</strong>
      </div>
    ));
  }

  render() {
    const { calendar, selected, selectDay } = this.state;
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
                {
                  selected && ([
                    <em key="selected-1">{selected.dateText}</em>,
                    <span key="selected-2">面向<b>{DIRECTIONS[this.random % DIRECTIONS.length]}</b>写程序，BUG最少；今日宜喝<b>{DRINKS[this.random % DRINKS.length]}</b> 。</span>
                  ])
                }
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
                              onClick={() => day && this.setState({ selectDay: day.date, selected: day })}
                            >{day && day.date}</td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {
              selected && (
                <div className="content_bottom">
                  <div className="company_address">
                    <h2>宜</h2>
                    {this.pickTodaysLuck.filter((_, i) => i < 3)}
                  </div>
                  <div className="contact_info">
                    <h2>忌</h2>
                    {this.pickTodaysLuck.filter((_, i) => i >= 3)}
                  </div>
                  <div className="clear" />
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;
