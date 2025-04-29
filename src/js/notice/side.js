// 检查条件是否符合（这里用示例条件，你可以替换为你的实际条件）
const notice_read_key = 'notice_read_key'

function shouldShowNotice() {
  return `side-${Utils.secureCompressHTML(DreamConfig.pop_notice_side_content)}` !== localStorage.getItem(notice_read_key)
}

// 创建公告弹窗
function createNoticePopup() {
  const noticeHTML = `
   <div class="notice-content ` + DreamConfig.pop_notice_side_orientation + ' ' + DreamConfig.pop_notice_side_vertical + `">
      <div class="content-title">
          <span>` + DreamConfig.pop_notice_side_title + `</span>
      </div>
      <div class="others">` + DreamConfig.pop_notice_side_content + `</div>
      <div class="others-end">
              <button class="notice-close-btn">` + DreamConfig.pop_notice_side_btn + `</button>
      </div>
   </div>

   <style>
    .notice-content {
        position: fixed;
        width: 350px;
        height: auto;
        max-height: 400px;
        border-radius: var(--radius-wrap);
        background-color: var(--background);
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        z-index: 10000;
    }

    .notice-content.left {
        left: -400px !important;
        transition: left 0.3s ease-out !important;
    }

    .notice-content.right {
        right: -400px !important;
        transition: right 0.3s ease-out !important;
    }
    
    .notice-content.top {
      top: 60px;
    }
    
    .notice-content.center {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .notice-content.bottom {
      bottom: 2rem;
    }

    @media (max-width: 768px) {
        .notice-content {
            width: 80% !important;
            max-width: 350px !important;
        }
    }
    
    /* 弹窗显示时的位置 */
    .notice-content.left.show {
        left:0 !important;
    }

    /* 弹窗显示时的位置 */
    .notice-content.right.show {
        right: 0 !important;
    }
    
    /* 标题样式 */
    .content-title {
        padding: 15px 20px;
        background-color: var(--theme);
        color: #f8f8f8;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: var(--radius-wrap) var(--radius-wrap) 0 0;
        text-align: center;
    }
    
    /* 内容区域 - 可滚动 */
    .others {
        flex: 1;
        padding: 20px;
        font-size: 1rem;
        overflow-y: auto; /* 允许垂直滚动 */
        line-height: 1.3em;
        text-align: center;
        color: var(--main);
    }
          
    /* 底部按钮区域 */
    .others-end {
        padding: 15px 20px;
        text-align: center;
        border-top: 1px solid var(--light-x);
    }
    
    .others-end button {
        padding: 8px 25px;
        background-color: var(--theme);
        color: #f8f8f8;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(var(--theme), 0.2);
    }
    
    .others-end button:hover {
        background-color: var(--theme);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(var(--theme), 0.3);
    }
  </style>
  `

  // 注入到body末尾
  document.body.insertAdjacentHTML('beforeend', noticeHTML)

  // 添加关闭事件
  document.querySelector('.notice-close-btn').addEventListener('click', function () {
    var popup = document.querySelector('.notice-content')
    popup.classList.remove('show')
    setTimeout(function () {
      popup.remove()
    }, 300)
    localStorage.setItem(notice_read_key, `side-${Utils.secureCompressHTML(DreamConfig.pop_notice_side_content)}`)
  })
}

// 页面加载时检查并显示公告
document.addEventListener('DOMContentLoaded', function () {
  if (shouldShowNotice()) {
    createNoticePopup()
    setTimeout(function () {
      document.querySelector('.notice-content').classList.add('show')
    }, 30)
  }
})
