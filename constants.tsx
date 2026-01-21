
import { LinkType } from './types';

export const INITIAL_DATA = {
  name: "Beaquos Estúdio Criativo",
  bio: "Design Criativo | Convites Digitais e Identidade Visual • Transformando sonhos em arte digital. ✨",
  avatarUrl: "",
  theme: 'studio-pro',
  highlights: [
    { text: "ATENDIMENTO ONLINE", iconId: "globe" },
    { text: "PAGAMENTO 100% SEGURO", iconId: "lock" },
    { text: "SERVIÇO 100% DIGITAL", iconId: "package" },
    { text: "ENTREGA RÁPIDA", iconId: "clock" }
  ],
  socials: [
    { platform: 'instagram', url: 'https://instagram.com/beaquos' },
    { platform: 'email', url: 'mailto:beaquos@gmail.com' }
  ],
  links: [
    {
      id: 'wa',
      title: "Falar no WhatsApp",
      url: "#",
      type: LinkType.SIMPLE,
      subtitle: "Orçamentos rápidos"
    },
    {
      id: 'store',
      title: "Nossa Loja Online",
      url: "#",
      type: LinkType.SIMPLE,
      subtitle: "Confira nossos produtos"
    },
    {
      id: 'convites',
      title: "Catálogo de Convites",
      url: "#",
      type: LinkType.SIMPLE,
      subtitle: "Veja os modelos disponíveis"
    }
  ],
  footer: {
    copyright: "© 2026 Beaquos. Todos os direitos reservados.",
    cnpj: "Atendimento 100% Digital",
    developer: "Beaquos Design"
  }
};
