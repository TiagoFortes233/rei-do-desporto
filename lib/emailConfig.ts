// Configuração de Email para o Sistema de Suporte
// Este ficheiro contém as configurações necessárias para o envio automático de emails

export const emailConfig = {
  // Configuração do EmailJS (Recomendado para projetos frontend)
  emailjs: {
    serviceId: 'seu_service_id_aqui',  // Substitua pelo seu Service ID do EmailJS
    templateId: 'seu_template_id_aqui', // Substitua pelo seu Template ID do EmailJS
    publicKey: 'sua_public_key_aqui',   // Substitua pela sua Public Key do EmailJS
  },

  // Configuração do seu email empresarial
  business: {
    email: 'suporte@reidodesporto.pt',
    name: 'Rei do Desporto - Suporte',
  },

  // Templates de email
  templates: {
    // Template para confirmação de receção da mensagem
    autoReply: {
      subject: 'Recebemos a sua mensagem - Rei do Desporto',
      body: `
        Olá {{customerName}},

        Obrigado por nos contactar!

        Recebemos a sua mensagem sobre: {{subject}}

        A nossa equipa irá responder no prazo máximo de 24 horas.

        Detalhes da sua mensagem:
        - Data: {{date}}
        - Assunto: {{subject}}
        - Mensagem: {{message}}

        Cumprimentos,
        Equipa Rei do Desporto
        
        ---
        Este é um email automático, não responda a este email.
        Para questões urgentes, contacte: +351 912 345 678
      `
    },

    // Template para notificação interna
    internalNotification: {
      subject: 'Nova Mensagem de Suporte - {{subject}}',
      body: `
        Nova mensagem recebida no sistema de suporte:

        Cliente: {{customerName}}
        Email: {{customerEmail}}
        Assunto: {{subject}}
        Data: {{date}}

        Mensagem:
        {{message}}

        ---
        Responda diretamente ao cliente através do email: {{customerEmail}}
      `
    }
  }
};

// Instruções de configuração:
/*
1. CONFIGURAR EMAILJS:
   - Vá para https://www.emailjs.com/
   - Crie uma conta gratuita
   - Configure um service (Gmail, Outlook, etc.)
   - Crie um template de email
   - Copie o Service ID, Template ID e Public Key
   - Substitua os valores acima

2. INSTALAR EMAILJS:
   - Adicione ao package.json: "emailjs-com": "^3.2.0"
   - Ou execute: npm install emailjs-com

3. CONFIGURAR TEMPLATE NO EMAILJS:
   - Variáveis disponíveis: {{customerName}}, {{customerEmail}}, {{subject}}, {{message}}, {{date}}
   - Configure o template com estas variáveis

4. TESTAR O SISTEMA:
   - Use o formulário de suporte
   - Verifique se o email é enviado
   - Confirme se recebe as notificações

5. CONFIGURAÇÃO AVANÇADA (Opcional):
   - Para maior controle, use Nodemailer com API própria
   - Configure SMTP do seu fornecedor de email
   - Adicione sistema de tickets/CRM
*/

// Função para enviar email de suporte
export const sendSupportEmail = async (formData: {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}) => {
  try {
    // Importar EmailJS dinamicamente
    const emailjs = await import('emailjs-com');
    
    // Preparar dados para o template
    const templateParams = {
      customerName: formData.nome,
      customerEmail: formData.email,
      subject: formData.assunto,
      message: formData.mensagem,
      date: new Date().toLocaleString('pt-PT')
    };

    // Enviar email
    const result = await emailjs.send(
      emailConfig.emailjs.serviceId,
      emailConfig.emailjs.templateId,
      templateParams,
      emailConfig.emailjs.publicKey
    );

    return {
      success: true,
      message: 'Email enviado com sucesso!',
      result
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente.',
      error
    };
  }
};

// Função para validar configuração
export const validateEmailConfig = () => {
  const { serviceId, templateId, publicKey } = emailConfig.emailjs;
  
  if (!serviceId || serviceId === 'seu_service_id_aqui') {
    console.warn('⚠️ EmailJS Service ID não configurado');
    return false;
  }
  
  if (!templateId || templateId === 'seu_template_id_aqui') {
    console.warn('⚠️ EmailJS Template ID não configurado');
    return false;
  }
  
  if (!publicKey || publicKey === 'sua_public_key_aqui') {
    console.warn('⚠️ EmailJS Public Key não configurada');
    return false;
  }
  
  return true;
};