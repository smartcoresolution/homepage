# SmartCoreSolution 홈페이지

SmartCoreSolution은 헬스케어 및 스마트제조 SaaS 솔루션을 제공하는 Progressive Web App(PWA)입니다. AI 음성·언어 분석 기술을 활용하여 의료 및 제조 분야의 디지털 전환을 지원합니다.

## 🚀 주요 기능

### 💊 헬스케어 서비스
- **정신 건강·인지 기능 진단**: AI 기반 음성 분석으로 치매, 우울증 등 조기 진단 지원
- **의료 기록 자동화**: 음성 입력을 통해 EMR(전자 의료 기록)에 자동 저장
- **재활 치료·의료 통역**: 언어 재활 및 다국적 환자를 위한 실시간 의료 통역

### 🏭 스마트제조 솔루션
- **IoT·AI·MES 기반**: 생산, 품질, 안전 데이터를 실시간 모니터링 및 공정 최적화
- **스마트 팩토리**: 제조 공정 자동화 및 품질 관리

### 📱 PWA 지원
- **오프라인 사용 가능**
- **PWA 설치 지원** (Chrome/Edge/Android)
- **반응형 웹 디자인**

## 📁 프로젝트 구조

```
homepage/
├── 📄 HTML 페이지
│   ├── index.html                 # 메인 홈페이지
│   ├── contact.html               # 문의하기 (FormSubmit 연동)
│   ├── mail-send.html            # 메일 보내기 (FormSubmit 연동)
│   ├── inquiry-status.html       # 문의 조회 및 관리
│   ├── thank-you.html            # 문의 완료 페이지
│   ├── admin-announcements.html  # 공지사항 관리
│   ├── healthcare.html            # 헬스케어 서비스 소개
│   ├── healthcare-diagnosis.html # 정신건강 진단
│   ├── healthcare-emr.html       # EMR 자동화
│   ├── healthcare-rehab.html     # 재활치료
│   ├── emr-automation.html       # EMR 자동화 상세
│   ├── mental-health.html        # 정신건강 서비스
│   ├── rehabilitation-interpretation.html # 재활 통역
│   ├── manufacturing.html         # 제조 서비스
│   └── smart-manufacturing.html  # 스마트 제조
├── 🎨 스타일 및 스크립트
│   ├── styles.css                 # 메인 스타일시트
│   ├── admin-styles.css          # 관리자 페이지 스타일
│   ├── smart-manufacturing.css   # 스마트 제조 스타일
│   ├── app.js                     # 메인 애플리케이션 로직
│   ├── admin.js                   # 관리자 기능 로직
│   └── service-worker.js          # PWA 서비스 워커
├── 🖼️ 이미지 및 아이콘
│   ├── assets/                    # 서비스 아이콘들
│   ├── icons/                     # PWA 아이콘들
│   └── images/                    # 제조 관련 이미지들
├── 📋 설정 파일
│   ├── manifest.webmanifest       # PWA 매니페스트
│   ├── CNAME                      # 커스텀 도메인 설정
│   └── create_service_icons.py    # 서비스 아이콘 생성 스크립트
└── README.md                      # 프로젝트 설명서
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **PWA**: Service Worker, Web App Manifest
- **Form Handling**: FormSubmit 서비스 연동
- **Responsive Design**: 모바일 최적화
- **Icons**: SVG, PNG, WebP 포맷 지원

## 📧 문의 시스템

### FormSubmit 연동
- **문의하기**: `jangck11@smartcoresolution.com`으로 직접 메일 전송
- **공개/비공개**: 문의 내용의 공개 여부 설정
- **비밀번호 보호**: 비공개 문의 시 비밀번호 설정
- **자동 응답**: 문의 접수 확인 메일 자동 발송

### 문의 관리
- **문의 조회**: 문의 ID와 비밀번호로 상태 확인
- **문의 목록**: 모든 문의 내역 조회
- **문의 삭제**: 불필요한 문의 삭제 기능

## 🚀 배포 및 호스팅

### GitHub Pages
- **URL**: https://smartcoresolution.com
- **브랜치**: `main`
- **도메인**: 커스텀 도메인 설정 완료

### 로컬 개발
```bash
# Python HTTP 서버
python -m http.server 8000

# VS Code Go Live
# 포트: 5500
```

## 📱 모바일 최적화

- **반응형 디자인**: 모든 화면 크기 지원
- **터치 최적화**: 모바일 터치 인터페이스
- **PWA 설치**: 홈 화면에 앱 추가 가능
- **오프라인 지원**: 서비스 워커를 통한 오프라인 기능

## 🎨 디자인 특징

- **컬러 테마**: 파란색 계열의 전문적이고 신뢰감 있는 디자인
- **모던 UI**: 깔끔하고 직관적인 사용자 인터페이스
- **일관성**: 모든 페이지에서 통일된 디자인 언어
- **접근성**: WCAG 가이드라인 준수

## 🔧 개발 환경 설정

### 필수 요구사항
- **Node.js**: 14.0.0 이상 (선택사항)
- **Python**: 3.7 이상 (로컬 서버용)
- **Git**: 버전 관리
- **VS Code**: 개발 편집기 (Go Live 확장 권장)

### 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/smartcoresolution/homepage.git

# 디렉토리 이동
cd homepage

# 로컬 서버 실행
python -m http.server 8000

# 브라우저에서 접속
# http://localhost:8000
```

## 📞 연락처

- **이메일**: jangck11@smartcoresolution.com
- **FAX**: 0504-081-2473
- **주소**: 08798 서울시 관악구 낙성대역 14길 39, 309호

## 📄 라이선스

SmartCoreSolution, Inc. © 2025

---

**AI 음성·언어 분석 기술로 의료와 제조의 디지털 전환을 이끄는 SmartCoreSolution** 🚀
