import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: 'black',
      color: 'white',
      py: 2,
      textAlign: 'center',
      position: 'static',
      bottom: 0,
      left: 0,
      width: '100vw',
      zIndex: 1300,
    }}
  >
    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* ロゴリンク群 */}
      <Box sx={{ backgroundColor: '#fff', borderRadius: 1, mx: 2, p: 0.5 }}>
        <Link href="https://www.city.koto.lg.jp/" target="_blank" rel="noopener">
          <img src="https://www.city.koto.lg.jp/shared/site_rn/images/header/hlogo.jpg" alt="江東区" style={{ height: 32 }} />
        </Link>
      </Box>
      <Box sx={{ backgroundColor: 'black', borderRadius: 1, mx: 2, p: 0.5 }}>
        <Link href="https://kdkjudo.org/" target="_blank" rel="noopener">
          <img src="https://i0.wp.com/kdkjudo.org/wp-content/uploads/2024/02/%E8%AC%9B%E9%81%93%E9%A4%A8%E3%83%AD%E3%82%B4%E7%99%BD%E8%B5%A4%EF%BC%89.png?fit=4619%2C1340&ssl=1" alt="講道館" style={{ height: 32 }} />
        </Link>
      </Box>
      <Box sx={{ backgroundColor: '#fff', borderRadius: 1, mx: 2, p: 0.5 }}>
        <Link href="https://tojuren.or.jp/index.html" target="_blank" rel="noopener">
          <img src="https://tojuren.or.jp/data/media/20240313/media/zyudorenmei/layout/header/logo.png" alt="東京都柔道連盟" style={{ height: 32 }} />
        </Link>
      </Box>
      <Box sx={{ backgroundColor: '#fff', borderRadius: 1, mx: 2, p: 0.5 }}>
        <Link href="https://www.judo.or.jp/" target="_blank" rel="noopener">
          <img src="https://www.judo.or.jp/cms/wp-content/themes/judo-wp/images/common/logo.svg" alt="全日本柔道連盟" style={{ height: 32 }} />
        </Link>
      </Box>
      <Box sx={{ backgroundColor: 'black', borderRadius: 1, mx: 2, p: 0.5 }}>
        <Link href="https://www.ijf.org/" target="_blank" rel="noopener">
          <img src="https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/icons/ijf_logo_color/AppIcon98x98@2x.png" alt="国際柔道連盟" style={{ height: 32 }} />
        </Link>
      </Box>
      <Box sx={{ backgroundColor: '#fff', borderRadius: 1, mx: 2, p: 0.5 }}>
        <Link href="https://www.judomatsuri.com/%E6%99%AE%E5%8F%8A%E4%BC%9A" target="_blank" rel="noopener">
          <img
            src="/src/assets/organizations/npo-judo-japan.png"
            alt="全日本柔道普及会"
            style={{ height: 32 }}
          />
        </Link>
      </Box>
    </Box>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} 江東区柔道会. All rights reserved.
    </Typography>
  </Box>
);