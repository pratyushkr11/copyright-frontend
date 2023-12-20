/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import './LiteraryWork2.css';
import { Link } from 'react-router-dom';

const LiteraryWork2 = (props) => {
    const { data, tab, setData, setTab } = props;

    const handleChange = (e) => {
        setData({
            ...data,
            form2: {
                ...data.form2,
                [e.target.id]: e.target.value
            }
        });
    }

    const handleBack = (e) => {
        setTab(tab - 1);
        e.preventDefault();
    }

    const handleNext = (e) => {
        e.preventDefault();
        setTab(tab + 1);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='main__container'>
                <Navbar />
                <div className='form-container2'>
                    <h2><u>Few More Questions About Your Work</u></h2>
                    <div className='formq-field'>
                        <form>
                            <div className='radio-btn'>
                                <label htmlFor='text'>Is the work to be registered an original work?</label>
                                <div>
                                    <p>
                                        <input
                                            id='isOriginalWork'
                                            checked={data.form2.isOriginalWork === "yes"}
                                            value="yes"
                                            type="radio"
                                            onChange={handleChange}
                                        />Yes
                                    </p>
                                    <p>
                                        <input
                                            id='isOriginalWork'
                                            checked={data.form2.isOriginalWork === "no"}
                                            value="no"
                                            type="radio"
                                            onChange={handleChange}
                                        />No
                                    </p>
                                </div>
                            </div>
                            <div>
                                {data.form2.isOriginalWork === "no" ? (
                                    <div className='conditional-conatiner'>
                                        Hello!! Since the application in this case is not an original work, please write to us at <Link to='mailto:contact@ipgyan.com' style={{ color: 'blue' }}><u>contact@ipgyan.com</u></Link>
                                    </div>
                                ) : (
                                    <div className='text-center' style={{ paddingTop: '30px' }}>
                                    </div>
                                )}
                            </div>
                            <div className='action-btn'>
                                <button className='btn text-center' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleBack}>
                                    <ArrowLeftIcon style={{ fontSize: '40' }} />
                                    Back
                                </button>
                                <button className='btn text-center' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleNext}>
                                    Next
                                    <ArrowRightIcon style={{ fontSize: '40' }} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default LiteraryWork2;
