# Implementation handover

The current implementation is a static interaction prototype. It does not connect to a model or inspect generated model output. Keyword routing on the latest user message selects local scenario content. It must not be represented to maintainers as a production safety classifier.

English/Chinese ingredient groups support 12 catalogue entries. Specific toilet and simultaneous-spray cases take precedence over broader categories. Multiple independent matches share a dialog. Compatibility checks use amber styling; chemical hazards use red. Review requires a second acknowledgement and withholds hazardous instructions.

Unmatched prompts receive the same five cleaning principles regardless of topic. Conversations are held only in page memory and reset on refresh. No analytics, remote API, or input storage is configured. Website assets load using relative paths for repository-subpath hosting.

The local Node server serves only website assets. GitHub Pages uses dist/ produced by the allowlisted build script; tests and documentation are not uploaded as website assets. Source files remain visible if the GitHub repository is public.

Before future production use, the content, classifier, accessibility and model-output interception would need independent validation. Current tests verify routing and interaction behavior within the supplied scenarios.
