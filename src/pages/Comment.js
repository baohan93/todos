import React from 'react';
import'../styles/timeline.css';

const Comment = () => {
    return (
        <>
<div class="container-fluid py-5">

<div class="row">
  <div class="col-lg-12">

    <div class="horizontal-timeline">

      <ul class="list-inline items">
        <li class="list-inline-item items-list">
          <div class="px-4">
            <div class="event-date badge bg-info">Năm 1</div>
            <h5 class="pt-2">Các môn cơ bản</h5>
            <p class="text-muted">Các học phần cơ bản của ngành IT và các môn đại cương </p>
            <div>
              {/* <a href=" " class="btn btn-primary btn-sm">Read more</a> */}
            </div>
          </div>
        </li>
        <li class="list-inline-item items-list">
          <div class="px-4">
            <div class="event-date badge bg-success">Năm 2</div>
            <h5 class="pt-2">Hoc kỳ 1</h5>
            <p class="text-muted">Quản lý chuyến bay.
            </p>
            <div>
              <a href=" https://github.com/Titk484/LT-Win_Web-quan-ly-chuyen-bay" class="btn btn-primary btn-sm">Read more</a>
            </div>
          </div>
        </li>
        <li class="list-inline-item items-list">
          <div class="px-4">
            <div class="event-date badge bg-danger">Năm 2</div>
            <h5 class="pt-2">Học kỳ 2</h5>
            <p class="text-muted">Quản lý Web học online.
              regular</p>
            <div>
              <a href="https://github.com/baohan93/Web_CK.git" class="btn btn-primary btn-sm">Read more</a>
            </div>
          </div>
        </li>
        <li class="list-inline-item items-list">
          <div class="px-4">
            <div class="event-date badge bg-warning">Năm 3</div>
            <h5 class="pt-2">Học kỳ 1</h5>
            <p class="text-muted"> Quản lý linh kiện máy tính.
            </p>
            <div>
              <a href="https://github.com/baohan93/CK-CNPM.git" class="btn btn-primary btn-sm">Read more</a>
            </div>
          </div>
        </li>
      </ul>

    </div>

  </div>
</div>

</div>

        </>
        
    );
};

export default Comment;