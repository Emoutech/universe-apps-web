"use client";

// i18n
import "src/locales/i18n";

// scroll bar
import "simplebar-react/dist/simplebar.min.css";

// lightbox
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// map
import "mapbox-gl/dist/mapbox-gl.css";

// editor
import "react-quill/dist/quill.snow.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";

// ----------------------------------------------------------------------

// redux
import ReduxProvider from "src/redux/redux-provider";
// locales
import { LocalizationProvider } from "src/locales";
// theme
import ThemeProvider from "src/theme";
import { primaryFont } from "src/theme/typography";
// components
import ProgressBar from "src/components/progress-bar";
import MotionLazy from "src/components/animate/motion-lazy";
import SnackbarProvider from "src/components/snackbar/snackbar-provider";
import { SettingsProvider, SettingsDrawer } from "src/components/settings";
// auth
import { AuthProvider, AuthConsumer } from "src/auth/context/jwt";
import { BASE_PATH_APPS } from "src/config-global";
import { AuthGuard } from "src/auth/guard";
import DashboardLayout from "src/layouts/dashboard/layout";

// export const metadata = {
//   title: "Minimal UI Kit",
//   description:
//     "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style",
//   keywords: "react,material,kit,application,demo,admin,template",
//   themeColor: "#000000",
//   manifest: `${BASE_PATH_APPS}/manifest.json`,
//   icons: [
//     {
//       rel: "icon",
//       url: `${BASE_PATH_APPS}/favicon/favicon.ico`,
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "16x16",
//       url: `${BASE_PATH_APPS}/favicon/favicon-16x16.png`,
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "32x32",
//       url: `${BASE_PATH_APPS}/favicon/favicon-32x32.png`,
//     },
//     {
//       rel: "apple-touch-icon",
//       sizes: "180x180",
//       url: `${BASE_PATH_APPS}/favicon/apple-touch-icon.png`,
//     },
//   ],
// };

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <AuthProvider>
          <ReduxProvider>
            <LocalizationProvider>
              <SettingsProvider
                defaultSettings={{
                  themeMode: "light", // 'light' | 'dark'
                  themeDirection: "ltr", //  'rtl' | 'ltr'
                  themeContrast: "default", // 'default' | 'bold'
                  themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
                  themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                  themeStretch: false,
                }}
              >
                <ThemeProvider>
                  <MotionLazy>
                    <SnackbarProvider>
                      <SettingsDrawer />
                      <ProgressBar />
                      <AuthConsumer>
                        <AuthGuard>
                          <DashboardLayout>{children}</DashboardLayout>
                        </AuthGuard>
                      </AuthConsumer>
                    </SnackbarProvider>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </LocalizationProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
