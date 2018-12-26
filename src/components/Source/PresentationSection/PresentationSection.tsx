import * as React from "react";
import { Container } from "reactstrap";
import expandLess from "./img/expand_less.svg";
import expandMore from "./img/expand_more.svg";
import paper from "./img/paper.svg";
import "./PresentationSection.scss";

interface MaterialItem {
    title: string;
    description: string;
    link: string;
}

const MaterialData: MaterialItem[] = [
    {
        title: "iTIP",
        description:
            "Powering blockchain businesses with CodeChain's NFTs (Slides)",
        link:
            "https://docs.google.com/presentation/d/1FMjmllXH-UNoKJVk6ubfzlgIScdRFpYLRCHs7HjhN6g/edit?usp=sharing"
    },
    {
        title: "Proof of Ownership",
        description:
            "new business opportunities with CodeChain tokens (Slides)",
        link:
            "https://docs.google.com/presentation/d/1a0-mWOEwIWpIbxaPiRcyi91I_zOlDUC958HItqaTfh0/edit?usp=sharing"
    },
    {
        title: "CodeChain SDK",
        description: "(Slides)",
        link:
            "https://docs.google.com/presentation/d/1Joz_b1AcmDTfyitOdG0ol_3535m2ggwfNu5L6Uqx0-g/edit?usp=sharing"
    },
    {
        title: "CodeChain developers meeting",
        description: "Cuckoo Cycle (Slides)",
        link:
            "https://docs.google.com/presentation/d/1SkGcBDtZHE4pvSi0qQOfuUCP-USibSelH9aAt8bSLeQ/edit?usp=sharing"
    },
    {
        title: "CodeChain Connect",
        description: "Introduction to CodeChain (Slides)",
        link:
            "https://docs.google.com/presentation/d/1XvcKCuIhc8eDWnAx-IneiS0a_e5CgPz31tQ-xUy978c/edit?usp=sharing"
    },
    {
        title: "CodeChain Connect",
        description:
            "Blockchain games and GoCryptobot: lessons learned (Slides)",
        link:
            "https://docs.google.com/presentation/d/17mHkxlywJu3mmlKi0k_3-HfGSfwwi1qP6qXYoTePPV4/edit?usp=sharing"
    },
    {
        title: "CodeChain Connect",
        description: "CodeChain Deep Dive (Slides)",
        link:
            "https://docs.google.com/presentation/d/1Q7--JyZ8_StcHWIquiIzOarsRh7c81YOI8ppyPC5QJA/edit?usp=sharing"
    },
    {
        title: "CodeChain Connect",
        description: "CodeChainOpen Source and Roadmap (Slides)",
        link:
            "https://docs.google.com/presentation/d/1oVBP9WCR7Oolb37Zk1gdIQ74CKtKdcsbTVzD0iqAbCI/edit?usp=sharing"
    },
    {
        title: "CodeChain Seminar",
        description: "Interchain and Sharding (Slides)",
        link:
            "https://docs.google.com/presentation/d/1woHERW1TS4ZpSWrynKHk-RRiMl3-ZTrjKdVY3QzBY_k/edit?usp=sharing"
    },
    {
        title: "CodeChain Seminar",
        description: "Script Language (Slides)",
        link:
            "https://docs.google.com/presentation/d/1E9efuCuTLT2E7gIbfPVezuAWhJMHakHr9x8zqLpt6Dg/edit?usp=sharing'"
    },
    {
        title: "IEEE Blockchain Summit Korea",
        description: "Crypto Game Development With CodeChain (Slides)",
        link:
            "https://docs.google.com/presentation/d/1Ly_w1-N3ju9D1xXgXTvatIIJUCNptgPtJHOotDVZqkg/edit?usp=sharing"
    },
    {
        title: "IEEE Blockchain Summit Korea",
        description: "CodeChain Core & Use cases (Slides)",
        link:
            "https://docs.google.com/presentation/d/1WP6DDBKZ26-kwManYverS69BJQFFUUcKDtNylteZlWY/edit?usp=sharing"
    },
    {
        title: "IEEE Blockchain Summit Korea",
        description: "CodeChain Programmable multi-asset blockchain...",
        link:
            "https://docs.google.com/presentation/d/1fCa8vR6UHXvn6vQNOlf4zG53KJCmgfghhUOc70Y46WE/edit?usp=sharing"
    },
    {
        title: "CodeChain Seminar",
        description: "Blockchain Storage (Slides)",
        link:
            "https://docs.google.com/presentation/d/1HtXdipYotF9DKmXJhP0c2OEgLCGEj1cxCP0jEuTeS8w/edit?usp=sharing"
    },
    {
        title: "CodeChain Seminar",
        description: "P2P Network (Slides)",
        link:
            "https://docs.google.com/presentation/d/1qYBKe8RONh3JKdRrwvKTuY_2p7FeQEJRR1oqep5lKmo/edit?usp=sharing"
    },
    {
        title: "CodeChain Seminar",
        description: "BFT Consensus (Slides)",
        link:
            "https://docs.google.com/presentation/d/10W7gKEvk_6XRIlSdiKwnwP9gVzo5Re5m_24QzLGaqvk/edit?usp=sharing"
    }
];

interface State {
    isExpended: boolean;
}

export default class PresentationSection extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isExpended: false
        };
    }
    public render() {
        const { isExpended } = this.state;
        return (
            <div className="Presentation-section">
                <Container>
                    <div className="section-title-container">
                        <div>
                            <span className="section-index">03</span>
                        </div>
                        <div className="section-deco" />
                        <div className="mb-3">
                            <span className="section-title">
                                Presentation materials
                            </span>
                        </div>
                        <div className="section-description-container">
                            <span className="section-description">
                                Please read the manual if you would like to know
                                the basic and intermediate functionality of
                                CodeChain. If you would like to interact with
                                CodeChain immediately, please refer to the API
                                document.
                            </span>
                        </div>
                    </div>
                    <div className="materials-container">
                        {isExpended
                            ? MaterialData.map(data =>
                                  this.createMaterialItem(data)
                              )
                            : MaterialData.slice(0, 3).map(data =>
                                  this.createMaterialItem(data)
                              )}
                    </div>
                    <div>
                        <div
                            className="custom-btn view-more-btn"
                            onClick={this.toggle}
                        >
                            View More{" "}
                            {isExpended ? (
                                <img src={expandLess} />
                            ) : (
                                <img src={expandMore} />
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    private toggle = () => {
        this.setState({
            isExpended: !this.state.isExpended
        });
    };

    private createMaterialItem = (data: MaterialItem) => {
        return (
            <a target="_blank" href={data.link}>
                <div className="material-item text-left">
                    <div className="icon-container">
                        <img src={paper} />
                    </div>
                    <div className="title-container">
                        <span className="title">{data.title}</span>
                    </div>
                    <div>
                        <span className="description">{data.description}</span>
                    </div>
                </div>
            </a>
        );
    };
}