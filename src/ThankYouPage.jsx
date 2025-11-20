import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from './features';

const ThankYouPage = () => {
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSurveySubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setIsSubmitting(false);
            } else {
                alert('Something went wrong. Please try again.');
                setIsSubmitting(false);
            }
        } catch (error) {
            setIsSubmitted(true);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Thank You Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="w-16 h-16 bg-[#D9F827] rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Thanks for signing up!
                    </h1>
                    <p className="text-xl text-gray-600">
                        We'll be in touch shortly.
                    </p>
                </motion.div>

                {/* Survey Section */}
                {!isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#F0F9FF] border border-blue-100 rounded-xl p-8 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                            Which of these features interests you?
                        </h2>
                        <p className="text-gray-600 text-center mb-8">
                            Help us understand what matters most to you
                        </p>

                        <form
                            name="feature-survey"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            onSubmit={handleSurveySubmit}
                        >
                            <input type="hidden" name="form-name" value="feature-survey" />
                            <input type="hidden" name="bot-field" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {FEATURES.map((feature) => (
                                    <label
                                        key={feature.id}
                                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${selectedFeatures.includes(feature.id)
                                            ? 'border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                            : 'border-gray-200 bg-white hover:border-gray-300'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            name="feature"
                                            value={feature.id}
                                            checked={selectedFeatures.includes(feature.id)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedFeatures([...selectedFeatures, feature.id]);
                                                } else {
                                                    setSelectedFeatures(selectedFeatures.filter(id => id !== feature.id));
                                                }
                                            }}
                                            className="sr-only"
                                        />
                                        <div className="flex items-start gap-3">
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${selectedFeatures.includes(feature.id)
                                                ? 'border-black bg-[#D9F827]'
                                                : 'border-gray-300'
                                                }`}>
                                                {selectedFeatures.includes(feature.id) && (
                                                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 mb-1">
                                                    {feature.title}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {feature.description}
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={selectedFeatures.length === 0 || isSubmitting}
                                className="w-full bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-8"
                    >
                        <p className="text-lg text-gray-600">
                            Thanks for your feedback!
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ThankYouPage;

