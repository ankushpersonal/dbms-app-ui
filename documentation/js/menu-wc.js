'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-81663ad0e39d55c44a77b542ea1d341f22641bf579d6e5404852dea88c8ac0cd490e176b82a7b77d3964047b05c7df55d3f518c56eaccf77d85203d035e0fd86"' : 'data-target="#xs-components-links-module-AppModule-81663ad0e39d55c44a77b542ea1d341f22641bf579d6e5404852dea88c8ac0cd490e176b82a7b77d3964047b05c7df55d3f518c56eaccf77d85203d035e0fd86"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-81663ad0e39d55c44a77b542ea1d341f22641bf579d6e5404852dea88c8ac0cd490e176b82a7b77d3964047b05c7df55d3f518c56eaccf77d85203d035e0fd86"' :
                                            'id="xs-components-links-module-AppModule-81663ad0e39d55c44a77b542ea1d341f22641bf579d6e5404852dea88c8ac0cd490e176b82a7b77d3964047b05c7df55d3f518c56eaccf77d85203d035e0fd86"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthenticateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerAddVehicleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerAddVehicleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerManageAppointmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerManageAppointmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerScheduleAppointmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerScheduleAppointmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerServicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerServicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerVehiclesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerVehiclesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopManageAppointmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopManageAppointmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopManagePartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopManagePartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopManageServicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopManageServicesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Service.html" data-type="entity-link" >Service</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});