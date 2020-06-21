<template>
  <div>
    <header v-html="govSpTopo"></header>
    <b-navbar toggleable="xl" variant="light" sticky class="shadow">
      <b-navbar-brand>IPEM - SP</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav small>
          <template v-for="([item, subitens], i) in menu">
            <b-nav-item-dropdown v-if="subitens" :key="i" :text="item">
              <b-dropdown-item v-for="(subitem, j) in subitens" :key="j">
                {{ subitem }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else :key="i">{{ item }}</b-nav-item>
          </template>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" small>
          <b-nav-item v-b-tooltip.hover.bottom title="Mapa do site">
            <fa icon="sitemap"></fa>
            <span class="d-xl-none">Mapa do site</span>
          </b-nav-item>

          <b-nav-item v-b-tooltip.hover.bottom title="Ouvidoria">
            <fa icon="headset"></fa>
            <span class="d-xl-none">Ouvidoria</span>
          </b-nav-item>

          <b-nav-item
            v-b-tooltip.hover.bottom
            title="Serviço de Informações ao Cidadão"
          >
            <fa icon="comment"></fa>
            <span class="d-xl-none">Serviço de Informações ao Cidadão</span>
          </b-nav-item>

          <b-nav-form>
            <b-input-group>
              <b-form-input
                size="sm"
                placeholder="Busca no site"
              ></b-form-input>
              <b-input-group-append>
                <b-button size="sm" type="submit">
                  Pesquisa
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-breadcrumb>
      <b-breadcrumb-item>IPEM-SP</b-breadcrumb-item>
      <b-breadcrumb-item active>Home</b-breadcrumb-item>
    </b-breadcrumb>

    <b-nav small align="right" class="pr-3 mb-3 container">
      <b-nav-form>
        <b-button-group>
          <b-button
            v-for="icon in [
              'facebook',
              'flickr',
              'twitter',
              'wordpress',
              'youtube',
            ]"
            :key="icon"
            variant="outline-secondary"
          >
            <fa :icon="['fab', icon]"></fa>
          </b-button>
        </b-button-group>
      </b-nav-form>
    </b-nav>

    <b-container>
      <b-row cols="1" cols-xl="2">
        <b-col>
          <b-form-group label="Encontre a regional que atende seu município:">
            <b-form-select :options="municipios">
              <template #first>
                <option :value="undefined" disabled hidden>
                  Selecione o município
                </option>
              </template>
            </b-form-select>
          </b-form-group>
          <fieldset>
            <legend>Agendamento/GRU</legend>
            <div
              style="
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: 1fr;
                gap: 15px;
              "
            >
              <b-button variant="outline-secondary">Taxímetros</b-button>
              <b-button variant="outline-secondary"
                >Balanças de feirantes</b-button
              >
              <b-button variant="outline-secondary">Veículos tanque</b-button>
              <b-button variant="outline-secondary">
                Veículo para transporte de GLP fracionado
              </b-button>
            </div>
          </fieldset>
          <hr class="d-xl-none" />
        </b-col>
        <b-col>
          <div class="right-grid">
            <b-button
              v-for="([text, _class], i) in rightGrid"
              :key="i"
              variant="outline-secondary"
              :class="_class"
            >
              {{ text }}
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <address
      class="text-white px-3 text-center shadow mt-3"
      style="background-color: black;"
    >
      IPEM-SP - Horário de atendimento (geral): das 8h às 17h<br />
      Atendimento jurídico: o atendimento presencial encontra-se suspenso até o
      dia 28/06/2020. O serviço será prestado exclusivamente através do
      e-mail<br />
      <a href="mailto:atendimentojuridico@ipem.sp.gov.br"
        >atendimentojuridico@ipem.sp.gov.br</a
      >
      ou pelo telefone <a href="tel:11972313800">(11) 97231-3800.</a><br />
      Atendimento no Setor de Taxímetro (Capital): das 8h às 16h - suspenso
      temporariamente<br />
      Sede: Rua Santa Cruz, 1922, Vila Gumercindo - São Paulo/SP<br />
      PABX: <a href="tel:1135812000">(011) 3581-2000</a> - contato das
      regionais, <a href>acesse aqui</a>
    </address>
    <footer v-html="govSpRodape"></footer>
  </div>
</template>

<script>
import govSpTopo from "./govsp-topo.html";
import govSpRodape from "./govsp-rodape.html";
import mun from "./mun.json";
import menu from "./menu.json";

export default {
  data() {
    return {
      govSpTopo,
      govSpRodape,
      municipios: mun.map((text) => ({ text })),
      menu,
      rightGrid: [
        ["2ª via GRU", "first-item"],
        ["Pague sua multa em até 36x", "first-item"],
        ["Publicações", "second-item"],
        ["Ensaios de proficiência"],
        ["Blog"],
        ["Notícias"],
        ["Ouvidoria"],
        ["Editais de licitação"],
        ["Calibração e ensaios"],
        ["Oficinas de manutenção"],
        ["PSiE"],
        ["Departamento jurídico"],
        ["Estágio"],
        ["Acidentes de consumo"],
        ["Nossos endereços"],
        ["Ouvidoria", "second-item"],
      ],
    };
  },
};
</script>

<style scoped>
.right-grid {
  display: grid;
  grid-auto-rows: 1fr;
  gap: 15px;
  grid-auto-flow: row;
}
.first-item {
  grid-column-end: span 2;
}
@media (min-width: 514px) {
  .right-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .second-item {
    grid-column-end: span 4;
  }
}
@media (max-width: 513px) {
  .right-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .second-item {
    grid-column-end: span 2;
  }
}
</style>
