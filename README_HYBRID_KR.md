# SCS 하이브리드 앱 (Capacitor)
이 프로젝트는 정적 홈페이지(HTML/CSS/JS)를 **Capacitor**로 감싸서
**안드로이드/아이오에스 하이브리드 앱**으로 빌드할 수 있도록 구성했습니다.
이미 `manifest.webmanifest`와 `service-worker.js`가 포함되어 있다면 **PWA**로도 동작합니다.

## 1) 설치
```bash
npm install
```

## 2) 웹 로컬 테스트 (PWA 설치 화면 확인)
```bash
npm run dev
# http://localhost:5173
```

## 3) Capacitor 플랫폼 추가
```bash
npx cap add android
# (macOS) npx cap add ios
npx cap sync
npx cap open android   # 또는 ios
```
작성: 2025-08-10 (Asia/Seoul)
