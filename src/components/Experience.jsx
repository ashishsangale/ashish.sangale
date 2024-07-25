import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Experience() {
    const experience = [
        {
            date: 'July 2023 - July 2024',
            cardTitle: 'Airpay Payment Services',
            cardSubtitle: 'Software Engineer 2',
            cardDetailedText: [
                'Streamlined database management by implementing ETL processes using Python and AWS Step functions, unifying disparate financial data into a centralized platform with MongoDB and MySQL, resulting in 65% improved data reliability.',
                'Led a strategic transition from a monolithic to microservices architecture by implementing containerization with Docker and orchestration using Kubernetes, increasing system modularity and scalability',
                'Played a key role in launching new products in Africa by conducting market research and developing localized features using Node.js and GraphQL, contributing to a successful market entry and achieving a user base of over 10,000+ within the first six months '
            ].map((item, i) => {
                return <li key={i}>{ item }</li>
            })
        },
        {
            date: 'August 2021 - July 2023',
            cardTitle: 'Airpay Payment Services',
            cardSubtitle: 'Software Engineer 1',
            cardDetailedText: [
                'Collaborated across departments to align technical development with business objectives by facilitating cross-functional meetings, using Agile methodologies, and tracking progress with JIRA, resulting in a 20% increase in on-time product delivery',
                'Managed high-volume transactions by optimizing transaction processing algorithms with Python and AWS Lambda, overseeing over 50,000 daily transactions with a 99.7% accuracy rate, ensuring secure and seamless transactions for users',
                'Engaged in data modeling, validation, and processing methodologies by designing efficient schemas with MongoDB and MySQL, and utilizing data validation frameworks with Python, improving data handling and analytics.'
            ].map((item, i) => {
                return <li key={i}>{ item }</li>
            })
        },
        {
            date: 'November 2020 - August 2021',
            cardTitle: 'Jio Platform Services',
            cardSubtitle: 'Graduate Engineer Trainee',
            cardDetailedText: [
                'Reviewed and analyzed system specifications using JIRA to maintain comprehensive coverage of test scenarios and adherence to project requirements.',
                'Collaborated with developers, project managers to develop and implement effective testing strategies and plans for various projects',
                'Created detailed logs to document testing phases, identified defects and reported bugs and errors for resolution through JIRA.',
                'Conducted post-release and post-implementation sanity testing to verify the quality and stability of software updates'
            ].map((item, i) => {
                return <li key={i}>{ item }</li>
            })
        }
    ]
  return (
    <section id = 'section' className ="about background-alt">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Experience</h2>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <VerticalTimeline animate={ true } className="custom-line">
                        {
                            experience.map((data, i) => {
                                return (
                                    <>
                                        <VerticalTimelineElement
                                            key={i}
                                            className="vertical-timeline-element--work"
                                            visible={true}
                                            contentStyle={{ background: "#343a40", }}
                                            date={data.date}
                                            dateClassName="timeline-date"
                                            contentArrowStyle={{
                                                borderRight: "7px solid  rgb(33, 150, 243)"
                                            }}
                                            iconStyle={{
                                                background: "#0563bb",
                                                color: "#fff",
                                            }}
                                            icon={<FontAwesomeIcon icon={faBriefcase}/>}/>
                                            <h3
                                                className="vertical-timeline-element-title"
                                                style={{
                                                    fontSize: '14',
                                                    color: 'rgba(255, 255, 255, 0.8)'
                                                }}>
                                                {data.cardTitle}
                                            </h3>
                                            <h4
                                                className="vertical-timeline-element-subtitle"
                                                style={{
                                                    fontSize: "1.2em",
                                                    fontWeight: "350",
                                                    color: "#7e8890",
                                                }}>
                                                {data.cardSubtitle}
                                            </h4>
                                            <p
                                                style={{
                                                    fontSize: "1em",
                                                    fontWeight: "350",
                                                    color: "#74808a",
                                                }}>
                                                {data.cardDetailedText}
                                            </p>
                                    </>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience