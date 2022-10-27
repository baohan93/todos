import React from 'react';
import loho from '../img/ava1.jpg';

import  '../styles/style.css';

const Analytics = () => {
    return (
        
        <div class="container mt-5">
    
        <div class="row d-flex justify-content-center">
            
            <div class="col-md-7">
                
                <div class="card p-3 py-4">
                    
                    <div class="text-center">
                        <img src ={loho} alt="ava" width="100" height="100" class="rounded-circle"/>
                    </div>
                    
                    <div class="text-center mt-3">
                        <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                        <h5 class="mt-2 mb-0">Trần Ngọc Bảo Hân</h5>
                        <span>Sinh viên năm 3</span>
                        
                        <div class="px-4 mt-1">
                            <p class="fonts">Định luật II Newton: Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật. </p>
                        
                        </div>
                        
                         <ul class="social-list">
                            <li><i class="fa fa-facebook"></i></li>
                            <li><i class="fa fa-dribbble"></i></li>
                            <li><i class="fa fa-instagram"></i></li>
                            <li><i class="fa fa-linkedin"></i></li>
                            <li><i class="fa fa-google"></i></li>
                        </ul>
                        
                        <div class="buttons">
                            
                            <button class="btn btn-outline-primary px-4" >
                                <a target="blank" href="https://baohan93.github.io/CV/">Read more</a>
                            </button>
                            
                        </div>
                        
                        
                    </div>
                    
                   
                    
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    );
}

export default Analytics;