import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
const ErrorPage = () => {
    useTitle('Error 404')
    return (
        <section class="page_404">
            <div class="container">
                <div class="row vh-100 align-items-center">
                    <div class="col-sm-12 text-center">
                        <div class="text-center">
                            <div class="four_zero_four_bg">
                            </div>

                            <div class="contant_box_404 mt-4">
                                <h3 class="h2">
                                &#x1F62C; Look like you're lost &#x1F62C;
                                </h3>

                                <p>The page you are looking for not avaible!</p>

                                <Link to="/" class="link-404 text-decoration-none px-3 py-3 text-white rounded-3 border border-danger mt-4 d-inline-block">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;