// 检查条件是否符合（这里用示例条件，你可以替换为你的实际条件）
const notice_read_key = 'notice_read_key'

function shouldShowNotice() {
  return `stagnant-${Utils.secureCompressHTML(DreamConfig.pop_notice_stagnant_content)}` !== localStorage.getItem(notice_read_key)
}

// 创建公告弹窗
function createNoticePopup() {
  const noticeHTML = `
  <div class="notice-parent">
    <div class="notice-content">
      <div class="content-title">
        <span>` + DreamConfig.pop_notice_stagnant_title + `</span>
      </div>
      <div class="others-tip">` + DreamConfig.pop_notice_stagnant_content + `</div>
      <div class="others-end">
          <button class="notice-close-btn">` + DreamConfig.pop_notice_stagnant_btn + `</button>
      </div>
    </div>
  </div>
  <style type="text/css">
    .notice-parent {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.5); 
      z-index: 10000;
      overscroll-behavior: contain;
    }

    .notice-content {
      text-align: center;
      padding: 25px;
      border-radius: 10px;
      animation: fadein 0.3s ease-out;
      width: 400px;
      max-width: 60%;
      height: auto;
      max-height: 400px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      box-shadow: 0 12px 40px rgba(31, 38, 135, 0.2);
      position: relative;
      margin: 20px 0; /* 添加上下边距 */
      display: flex;
      flex-direction: column;
    }
    
    .night .notice-content {
      background: rgba(57, 62, 70, 0.6);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .notice-content::before {
      content: '';
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border-radius: 10px;
      background: linear-gradient(145deg,
          rgba(255,255,255,0.3) 0%,
          rgba(255,255,255,0.1) 100%);
      z-index: -1;
    }

    .others-tip {
      display: block;
      margin-top: 5px;
      margin-bottom: 10px;
      padding: 20px;
      font-size: 1rem;
      border-radius: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: var(--main);
      overflow-y: auto; /* 允许垂直滚动 */
      word-wrap: break-word;
    }
    
    .night .others-tip {
      background: rgba(51, 51, 51, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .content-title {
      margin-bottom: 20px;
      font-size:1.2rem;
      font-weight: bold;
      word-wrap: break-word;
      color: var(--dark-c);
    }

    .others-end {
      display: flex;
      justify-content: center;
      gap: 20%;
      margin-top: 20px;
    }

    .others-end button {
      padding: 10px 20px;
      border-radius: 16px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      text-align: center;
      text-decoration: none;
      background-color: var(--theme);
      color: #f8f8f8;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(var(--theme), 0.2);
      line-height: 1em;
    }

    .others-end button:hover {
      background: var(--theme);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(var(--theme), 0.3);
    }

    @keyframes fadein {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .notice-content {
        width: 75% !important;
        max-width: 400px !important;
      }
    }

  </style>
  `

  // 注入到body末尾
  document.body.insertAdjacentHTML('beforeend', noticeHTML)

  // 添加关闭事件
  document.querySelector('.notice-close-btn').addEventListener('click', function () {
    closePopupNotice()
  })
}

window.closePopupNotice = function () {
  // 隐藏弹窗
  document.querySelector('.notice-parent').remove()
  document.body.classList.remove('body-no-scroll')
  localStorage.setItem(notice_read_key, `stagnant-${Utils.secureCompressHTML(DreamConfig.pop_notice_stagnant_content)}`)
}

// 页面加载时检查并显示公告
document.addEventListener('DOMContentLoaded', function () {
  if (shouldShowNotice()) {
    document.body.classList.add('body-no-scroll')
    createNoticePopup()
    //单次显示时，直接记录
    if (DreamConfig.pop_notice_stagnant_show_mode) {
      localStorage.setItem(notice_read_key, `stagnant-${Utils.secureCompressHTML(DreamConfig.pop_notice_stagnant_content)}`)
    }
  }
})
