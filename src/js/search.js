$(function () {
  var searchForm = document.getElementById('dream-search-form')
  var target = DreamConfig.search_target
  var searchInput = document.getElementById('halo-search-form-text-input')
  var searchResult = $('#dream-search-result')
  var searchResultEmpty = $('#dream-search-result-empty')
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault()
    findResult(searchInput.value)
  })
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      if (searchForm.contains(document.activeElement)) {
        event.preventDefault()
        findResult(searchInput.value)
      }
    }
  })
  // 监听输入事件
  searchInput.addEventListener('input', function (event) {
    findResult(event.target.value)
  })

  function removeHTMLTags(str) {
    const regex = /<(?!\/?mark\b)[^>]*>/g
    return str.replace(regex, '')
  }

  function findResult(keyword) {
    if (!keyword) {
      searchResult.empty()
      searchResultEmpty.show()
      return
    }
    Utils.request({
      url: '/apis/api.halo.run/v1alpha1/indices/post',
      contentType: 'application/json;charset=UTF-8',
      returnRaw: true,
      data: {
        keyword,
        limit: $('#halo-search-form-limit').val(),
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>'
      }
    })
      .then((_res) => {
        if (_res.hits.length > 0) {
          searchResultEmpty.hide()
          searchResult.empty()
          for (var i = 0; i < _res.hits.length; i++) {
            try {
              var hit = _res.hits[i]
              var title = removeHTMLTags(hit.title)
              var description = hit.content ? removeHTMLTags(hit.content) : ''

              searchResult.append('<div class="widget card search">\n' +
                '<div class="card-content main">\n' +
                '<a href="' + hit.permalink + '" ' + ' target="' + target + '">\n' +
                '<h2 class="title">' + title + '</h2>\n' +
                '</a>\n' +
                (description ?
                  ('<div class="main-content not-toc description">\n' + description +
                '\n</div>\n') : '') +
                '<hr/>\n' +
                '<div class="meta">\n' +
                '<div></div>\n' +
                '<em text="最后更新于 ' + Utils.formatDate(hit.updateTimestamp, 'yyyy年MM月dd日 HH:mm:ss') + '"></em>\n' +
                '</div>\n' +
                '</div>\n')
              // eslint-disable-next-line no-empty
            } catch (e) {
            }
          }
        } else {
          searchResultEmpty.show()
          searchResult.empty()
        }
      })
      .catch((err) => {
      })
  }

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  var keyword = getParameterByName('keyword')
  if (keyword) {
    var event = new Event('input', {bubbles: true})
    searchInput.dispatchEvent(event)
  }
})