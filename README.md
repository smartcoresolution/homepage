# 홈페이지 (homepage)

`davechang-99/homepage`는 스마트 코어 솔루션의 `homepage`를 기반으로 새롭게 생성된 홈페이지 프로젝트입니다. 다양한 분야(헬스케어, IoT, 스마트 제조 등)에 대한 여러 페이지를 포함하고 있습니다.

---

##  폴더 구조

```
assets/                      : 이미지, 아이콘 등 정적 자산
icons/                       : 서비스 아이콘 리소스
images/                      : 페이지별 이미지 리소스
CNAME                        : 커스텀 도메인 설정 파일
app.js                       : 주요 자바스크립트 로직
contact.html                 : 연락처 페이지
(각종 서비스 관련 HTML 파일들)
styles.css                   : 전체 스타일 정의
smart‑manufacturing.css      : 스마트 제조 관련 CSS
service‑worker.js            : PWA 서비스 워커 스크립트
manifest.webmanifest         : PWA 매니페스트 설정
```

---

##  주요 페이지 및 기능

- **index.html**: 홈페이지 메인 페이지
- **contact.html**: 연락처 페이지
- 헬스케어 관련 페이지:
  - `healthcare.html`, `healthcare-diagnosis.html`, `healthcare-emr.html`, `healthcare-rehab.html`, `rehabilitation-interpretation.html`, `emr-automation.html`
- **iot.html**: IoT 서비스 소개 페이지
- **smart-manufacturing.html**: 스마트 제조 페이지

---

##  사용 기술 스택

- **HTML**, **CSS**, **JavaScript** 기반 웹 프론트엔드
- **Python** (스크립트용; 예: `create_service_icons.py`)  
  → HTML/JS로 만든 서비스 아이콘 자동 생성 지원
- **PWA (Progressive Web App)** 기능:
  - `service-worker.js`
  - `manifest.webmanifest`

---

##  설치 & 실행

1. 리포지토리 클론  
   ```bash
   git clone https://github.com/davechang-99/homepage.git
   ```

2. 웹 서버로 실행  
   ```bash
   cd homepage
   # Python 3 기준 간단한 서버 실행
   python -m http.server 8000
   ```
   또는 `Live Server` 익스텐션 등을 통해 로컬에서 확인 가능합니다.

3. `localhost:8000/index.html` 로 접속 후 페이지 확인

4. **PWA 테스트**  
   크롬 개발자 도구의 `애플리케이션` 탭에서 설치 가능 여부 및 캐시 동작 확인 가능

---

##  아이콘 자동 생성 (옵션)

`create_service_icons.py` 스크립트를 이용하면 `icons/` 폴더에 자동으로 서비스 아이콘을 만들어줍니다.  
필요한 이미지나 설정을 스크립트에 지정하여 활용해보세요.

---

##  기여 안내

- 기능 추가 아이디어, 버그 수정, 디자인 개선 등 환영합니다.
- Pull Request 제출 시, 간단한 설명과 함께 PR을 남겨주세요.
- README에 필요한 내용이나 변경 요청 있으시면 언제든지 말씀해주세요!

---

##  라이선스

별도로 지정된 라이선스는 없으며, 필요 시 프로젝트별 맞는 라이선스를 추가해주세요.

---

> **요약**:  
웹 기반, PWA 기능 포함, 다양한 도메인 페이지(헬스케어, IoT 등)를 지원하는 홈페이지 프로젝트입니다.
