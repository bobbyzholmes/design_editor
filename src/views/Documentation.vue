<script setup lang="ts">
import { ref } from 'vue';
import CodeBlock from '../components/CodeBlock.vue';
import WaitlistForm from '../components/WaitlistForm.vue';

const importExample = ref(`
import { useThemeStore } from './stores/themeStore';

const themeStore = useThemeStore();
const theme = themeStore.currentTheme;
`);

const exportExample = ref(`
// Export theme to JSON
const themeJson = themeStore.exportTheme();

// Import theme from JSON
themeStore.importTheme(themeJson);
`);
</script>

<template>
  <div class="documentation">
    <div class="work-in-progress">
      <h2>🚧 Work in Progress</h2>
      <p>This documentation is currently under development. More detailed information and examples will be added soon.</p>
    </div>
    
    <h1>Material Theme Editor Documentation</h1>
    
    <section>
      <h2>Getting Started</h2>
      <p>The Material Theme Editor allows you to create, customize, and manage Material Design themes for your applications. Use the editor to:</p>
      <ul>
        <li>Create custom Material Design themes</li>
        <li>Preview changes in real-time</li>
        <li>Export themes for use in your projects</li>
        <li>Save and manage multiple themes</li>
      </ul>
    </section>

    <section>
      <h2>Using Themes</h2>
      <h3>Importing the Theme Store</h3>
      <CodeBlock :code="importExample" language="typescript" />
      
      <h3>Theme Properties</h3>
      <ul>
        <li><strong>Colors:</strong> Primary, secondary, accent, and surface colors</li>
        <li><strong>Typography:</strong> Font families and sizes</li>
        <li><strong>Shape:</strong> Border radius and elevation settings</li>
        <li><strong>Components:</strong> Styling for buttons, inputs, and other UI elements</li>
      </ul>
    </section>

    <section>
      <h2>Export/Import</h2>
      <p>Themes can be exported to JSON format and imported back:</p>
      <CodeBlock :code="exportExample" language="typescript" />
    </section>

    <section class="upcoming-features">
      <h2>Upcoming Features</h2>
      <ul>
        <li>Detailed component customization guides</li>
        <li>Theme migration tools</li>
        <li>Advanced color palette generation</li>
        <li>Theme sharing and community features</li>
      </ul>
    </section>

    <section class="waitlist-section">
      <WaitlistForm />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.documentation {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  .work-in-progress {
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;

    h2 {
      color: #856404;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      color: #856404;
      margin: 0;
    }
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  section {
    margin-bottom: 3rem;

    h2 {
      color: #333;
      margin-bottom: 1rem;
    }

    h3 {
      color: #666;
      margin: 1.5rem 0 1rem;
    }

    ul {
      list-style-type: disc;
      margin-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
      }
    }
  }

  .upcoming-features {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;

    h2 {
      color: #495057;
      margin-bottom: 1rem;
    }

    ul {
      color: #6c757d;
    }
  }

  .waitlist-section {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
}

:deep(.dark-mode) {
  .documentation {
    .work-in-progress {
      background-color: #2d2d2d;
      border-color: #404040;

      h2, p {
        color: #ffd700;
      }
    }

    h1, h2, h3 {
      color: #e2e8f0;
    }

    .upcoming-features {
      background-color: #2d2d2d;

      h2 {
        color: #94a3b8;
      }

      ul {
        color: #cbd5e1;
      }
    }
  }
}
</style>