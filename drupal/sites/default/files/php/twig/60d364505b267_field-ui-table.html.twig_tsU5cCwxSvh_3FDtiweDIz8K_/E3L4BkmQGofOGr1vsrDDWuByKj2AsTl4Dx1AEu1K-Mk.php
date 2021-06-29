<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/modules/field_ui/templates/field-ui-table.html.twig */
class __TwigTemplate_7c6d8d21920284a01cdb07a301fc33b733f44a9bb9681f4b0ecf921ae6f26134 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 45
        echo "<div id=\"field-display-overview-wrapper\">
  ";
        // line 46
        $this->loadTemplate("table.html.twig", "core/modules/field_ui/templates/field-ui-table.html.twig", 46)->display($context);
        // line 47
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/modules/field_ui/templates/field-ui-table.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 47,  42 => 46,  39 => 45,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/modules/field_ui/templates/field-ui-table.html.twig", "C:\\xampp\\htdocs\\crisis-portal\\core\\modules\\field_ui\\templates\\field-ui-table.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("include" => 46);
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['include'],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
