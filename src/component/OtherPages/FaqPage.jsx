import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './FaqPage.css';
import { Link } from 'react-router-dom';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FaqPage() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='main-conatiner'>
            <div className='nav-container'>
                <Navbar />
            </div>
            <div className='faq-container'>
                <div className='header text-center pb-5'>
                    <h1><u>Frequently Asked Questions</u></h1>
                </div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><b>1. What is Copyright?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Copyright is an exclusive right that provides the creator of an original work with rights to its
                            use and distribution, usually for a limited time, with the intention of enabling the creator. This
                            protection applies to a wide range of creative works, including but not limited to literary,
                            artistic, and musical creations, software programs, etc.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography><b>2. What is the scope of protection in the <u><Link to='https://copyright.gov.in/documents/copyrightrules1957.pdf' target="_blank" style={{ color: '#000' }}>
                            Copyright Act, of 1957?</Link></u></b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The Copyright Act, 1957 protects original literary, dramatic, musical, and artistic works and
                            cinematograph films and sound recordings from unauthorized uses. But there is no copyright
                            protection for ideas, procedures, methods of operation, or mathematical concepts as such.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography><b>3. Who can file an application for copyright registration?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Any individual who is an original creator, joint author of a work or legal heir of the original
                            creator.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography><b>4. How can I file for the registration of my work?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            - You can file any of your work for registration through a prescribed <Link to='https://www.copyright.gov.in/' target="_blank" style={{ color: 'blue' }}><u>
                                government site</u></Link> by paying prescribed fees, also for seamless filing you can choose “Kopyrightit” as a platform
                            that can help you file your copyright easily.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography><b>5. What are the guidelines regarding the registration of a work under the Copyright
                            Act,1957?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Chapter XIII of the <Link to='https://copyright.gov.in/Documents/Copyright_Rules_2013_and_Forms.pdf' target="_blank" style={{ color: 'blue' }}><u>
                                Copyright Rules, 2013,</u></Link> as amended, sets out the procedure for the
                            registration of a work.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel5d-header">
                        <Typography><b>6. How long does it take for the work to get registered by the Copyright office in India?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It may take around 2 to 3 months time for registration of any work in the normal course.
                            The cooperation of the applicant in providing necessary information is the key to the speedy
                            disposal of the matter.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                        <Typography><b>7. How long does copyright protection last?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The term of a registered copyright lasts the lifetime of the author of the work and an
                            additional 60 years following the deceased of the author.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                        <Typography><b>8. What information/documents do I need to submit for copyright filing?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Name, address, and nationality of the person whose photograph appears on the work may
                            please be intimated in the remarks column. If that person is other than the applicant, a No
                            Objection Certificate, in original may be obtained from that person [from heir(s) if the person
                            is deceased/from the guardian in the case of minor], and a Power of Attorney that should be
                            on stamp paper duly accepted by attorney/signed by the applicant.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                        <Typography><b>9. What is Published work?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Published work means a work made available to the public by issuing copies of the work or
                            communicating it to the public.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                        <Typography><b>10. What is “fair use”?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Fair use is an affirmative defense that can be raised in response to claims by a copyright
                            owner that a person is infringing a copyright. Fair use permits a party to use a copyrighted
                            work without the copyright owner’s permission for purposes such as criticism, comment,
                            news reporting, teaching, scholarship, or research.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                    <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                        <Typography><b>11. Whether Computer Software or programs can be registered?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes. Computer Software or program can be registered as a ‘literary work’.Under the
                            Copyright Act, 1957 “literary work” includes computer programs, tables, and compilations,
                            including computer databases.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                    <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
                        <Typography><b>12. Whether an App can be registered?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            An App is a complete, self-contained computer program that is designed to perform specific
                            tasks. Usually called 'Apps' for short, it can be registered as a ‘literary work’
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                    <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
                        <Typography><b>13. What is a POA?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            POA or Power of Attorney is a legal instrument that authorizes a designated person (an
                            attorney or an agent) the power to sign and execute deeds and documents on another person’s
                            behalf.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                    <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
                        <Typography><b>14. Can I track the status of my copyright application through Kopyrightit?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes. You can track your application through Kopyrightit.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                    <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
                        <Typography><b>15. Can I edit or update my copyright application after submission?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            No. You can't edit or update my copyright application after submission. Once submitted,
                            it will be considered as final.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                    <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
                        <Typography><b>16. What support options are available if I encounter any issues?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes. A 24*7 Support option is available.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel118'} onChange={handleChange('panel118')}>
                    <AccordionSummary aria-controls="panel118d-content" id="panel118d-header">
                        <Typography><b>17. Do I need to display a copyright notice on my work?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            While it's not required, displaying a copyright notice (© [Year] [Your Name]) can help
                            inform others about your rights and may be beneficial in certain legal situations.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                    <AccordionSummary aria-controls="panel18d-content" id="panel18d-header">
                        <Typography><b>18. What should I do if someone is using my copyrighted work without permission?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            If you believe someone is infringing on your copyright, you may want to send a
                            cease-and-desist letter or take legal action. Consulting with a legal professional is
                            recommended.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                    <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
                        <Typography><b>19. Can I copyright a name, title, or slogan?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Copyright does not protect names, titles, or short phrases. These may be protected under
                            trademark law.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                    <AccordionSummary aria-controls="panel20d-content" id="panel20d-header">
                        <Typography><b>20. Is my work protected internationally by copyright?</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Copyright protection is generally territorial. However, international agreements like the
                            Berne Convention provide a framework for recognizing and enforcing copyrights across
                            member countries.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                    <AccordionSummary aria-controls="panel21d-content" id="panel21d-header">
                        <Typography>Collapsible Group Item #6</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    );
}
